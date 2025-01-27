resource "aws_instance" "example" {
 count         = 1
 ami           = var.ami
 instance_type = var.instance_type
 key_name      = var.key_name
 security_groups = [aws_security_group.allow_ssh.name]

 tags = {
   Name = "AnsibleInstance-${count.index + 1}"
 }

 associate_public_ip_address = true  # Stellt sicher, dass eine öffentliche IP zugewiesen wird
}
