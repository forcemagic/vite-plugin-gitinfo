import gitInfo from "virtual:git-info";

document.getElementById("gitSha")!.innerText = gitInfo.sha;
document.getElementById("gitCommittedAt")!.innerText = gitInfo.committedAt;
document.getElementById("gitBranch")!.innerText = gitInfo.branch;
