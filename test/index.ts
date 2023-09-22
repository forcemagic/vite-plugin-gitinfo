import gitInfo from "virtual:gitinfo";

document.getElementById("gitSha")!.innerText = gitInfo.sha;
document.getElementById("gitCommittedAt")!.innerText = gitInfo.committedAt;
document.getElementById("gitBranch")!.innerText = gitInfo.branch;
