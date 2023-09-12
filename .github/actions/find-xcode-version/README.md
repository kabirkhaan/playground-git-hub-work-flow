# GitHub Action: Find Xcode version

## Description

This action will either forward the `force_version` input to its `xcode_version` output, or it will parse the `.xcode-version` file and fall back to the `default_version` input in case of any parsing errors.

## Usage

```yml
- name: Find Xcode version
  id: find-xcode-version
  uses: ./.github/actions/find-xcode-version
  with:
    default_version: '12.4'
    force_version: ${{ github.event.inputs.xcode }}
```

## Working with the code

This action uses node modules. Run `yarn install` on this folder first to make sure you have the node modules installed. Proceeding without this will create non-functional actions.

Following [this](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github) instruction, the code of the action needs to be compiled before committing. You can use `yarn compile` for that.