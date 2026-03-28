export function getRepoConfig(repo: string) {
  return {
    min_description_length: 10,
    block_wip: true,
    require_title: true,
  };
}