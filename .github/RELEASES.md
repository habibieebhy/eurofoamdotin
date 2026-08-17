# EUROFOAM release workflow

The repository ships with two GitHub Actions workflows.

## 1. Main branch deployment image

`.github/workflows/docker-image.yml`

Every push to `main` publishes:

- `<DOCKER_USERNAME>/eurofoam-mattresses:latest`
- `<DOCKER_USERNAME>/eurofoam-mattresses:sha-<commit-sha>`

## 2. Versioned releases

`.github/workflows/release.yml`

Push a semantic version tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions will publish:

- `<DOCKER_USERNAME>/eurofoam-mattresses:1.0.0`
- `<DOCKER_USERNAME>/eurofoam-mattresses:1.0`
- `<DOCKER_USERNAME>/eurofoam-mattresses:1`
- `<DOCKER_USERNAME>/eurofoam-mattresses:latest`

It also creates a GitHub Release named:

```text
EUROFOAM Mattresses 1.0.0
```

with generated release notes and an attached deployment-source ZIP.

## Required GitHub Actions secrets

Repository → Settings → Secrets and variables → Actions:

```text
DOCKER_USERNAME
DOCKER_PASSWORD
```

`DOCKER_PASSWORD` should be a Docker Hub access token rather than your normal account password.
