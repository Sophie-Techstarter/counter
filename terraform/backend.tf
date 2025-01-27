terraform {
    backend "s3" {
      bucket = "github-actions-tfstate-bucket" ## hier müsst ihr euren eigenen S3 Bucket hinzufügen
      key = "github-actions.tfstate"
      region = "eu-central-1"
    }
}