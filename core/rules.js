{
  "rules": [
    {
      "field": "body",
      "type": "minLength",
      "value": 10,
      "error": "PR description too short"
    },
    {
      "field": "title",
      "type": "required",
      "error": "PR title is required"
    },
    {
      "field": "title",
      "type": "notIncludes",
      "value": "wip",
      "error": "WIP PRs are not allowed"
    }
  ]
}