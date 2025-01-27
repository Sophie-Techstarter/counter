terraform {
    backend "s3" {
      bucket = "githubaction-sophie" # hier müsst ihr euren eigenen S3 Bucket hinzufügen
      key = "github-actions.tfstate"
      region = "eu-central-1"
    }
}