variable "ami" {
    description = "AMI ID"
    default = "ami-07eef52105e8a2059"
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
