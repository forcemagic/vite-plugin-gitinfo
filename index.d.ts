declare module "virtual:git-info" {
  const gitInfo: {
    /**
     * Commit hash resolved from HEAD.
     */
    sha: string;

    /**
     * The current checked out branch.
     */
    branch: string;

    /**
     * The date the commit was authored. (ISO 8601 format)
     */
    committedAt: string;
  };

  export default gitInfo;
}
