# Start from the official Kali Linux base image
FROM kalilinux/kali-rolling

# Update and upgrade the system
RUN apt-get update && apt-get -y upgrade

# Install common tools for a headless environment
RUN apt-get install -y \
    kali-linux-headless \
    net-tools \
    curl \
    wget \
    vim \
    git \
    openssh-server \
    sudo


# Add a new user (optional, if you need non-root access)
RUN useradd -ms /bin/bash kaliuser && \
    echo 'kaliuser:kali' | chpasswd && adduser kaliuser sudo

# Expose SSH port if remote access is needed
EXPOSE 22

# Start SSH service when the container starts (optional)
CMD ["/usr/sbin/sshd", "-D"]

# Set default user (optional)
USER kaliuser

# Set working directory (optional)
WORKDIR /home/kaliuser