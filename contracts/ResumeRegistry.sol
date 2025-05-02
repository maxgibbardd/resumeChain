// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/// @title ResumeRegistry
/// @notice Store and retrieve user resumes (IPFS hashes) on‐chain
contract ResumeRegistry {
    /// @dev Emitted when a resume is uploaded
    event ResumeUploaded(
        address indexed owner,
        string ipfsHash,
        uint256 timestamp
    );

    struct Resume {
        address owner;
        string ipfsHash;
        uint256 timestamp;
    }

    Resume[] public resumes;
    mapping(address => uint256[]) private userResumes;

    /// @notice Upload your resume by its IPFS CID
    /// @param ipfsHash The content identifier of the resume
    function uploadResume(string calldata ipfsHash) external {
        require(bytes(ipfsHash).length > 0, "IPFS hash cannot be empty");
        resumes.push(Resume(msg.sender, ipfsHash, block.timestamp));
        userResumes[msg.sender].push(resumes.length - 1);
        emit ResumeUploaded(msg.sender, ipfsHash, block.timestamp);
    }

    /// @notice Fetch all resumes you’ve uploaded
    /// @param user The address to query
    /// @return List of Resume structs
    function getResumesByAddress(address user)
        external
        view
        returns (Resume[] memory)
    {
        uint256[] storage indices = userResumes[user];
        Resume[] memory result = new Resume[](indices.length);
        for (uint256 i = 0; i < indices.length; i++) {
            result[i] = resumes[indices[i]];
        }
        return result;
    }

    /// @notice Total number of resumes stored
    function totalResumes() external view returns (uint256) {
        return resumes.length;
    }

    /// @notice Update an existing resume’s IPFS hash
    /// @dev Only the uploader can update
    /// @param index The resume index
    /// @param newIpfsHash The new IPFS CID
    function updateResume(uint256 index, string calldata newIpfsHash) external {
        Resume storage r = resumes[index];
        require(r.owner == msg.sender, "Not the owner");
        require(bytes(newIpfsHash).length > 0, "IPFS hash cannot be empty");
        r.ipfsHash = newIpfsHash;
        r.timestamp = block.timestamp;
        // Could emit an event here if desired
    }
}
