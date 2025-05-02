async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const Registry = await ethers.getContractFactory("ResumeRegistry");
  const registry = await Registry.deploy();
  await registry.deployed();

  console.log("Registry deployed to:", registry.address);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
