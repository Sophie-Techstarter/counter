provider "aws" {
  region = "eu-central-1"
}

resource "aws_security_group" "allow_http" {
  name        = "allow_http"
  description = "Allow HTTP inbound traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "webserver" {
  ami           = "ami-07eef52105e8a2059"  # Ubuntu
  instance_type = "t2.micro"
  key_name      = "windows-pair"
  security_groups = [aws_security_group.allow_http.name]

  tags = {
    Name = "NginxWebServer"
  }

  associate_public_ip_address = true
}