variable "ami" {
    description = "AMI ID"
    default = "ami-0eddb4a4e7d846d6f"
}

variable "instance_type" {
    description = "Instance Type"
    default = "t2.micro"
}

variable "key_name" {
    description = "Key name"
    default = "windows-pair"
}

variable "region" {
    description = "Region"
    default = "eu-central-1"
}
