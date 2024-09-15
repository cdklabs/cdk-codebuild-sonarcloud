# Start with the official .NET SDK image
FROM mcr.microsoft.com/dotnet/sdk:6.0

# Install required packages
RUN apt-get update && \
    apt-get install -y curl gnupg apt-transport-https && \
    rm -rf /var/lib/apt/lists/*

# Install Python 3
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv && \
    pip install --upgrade setuptools wheel && \
    rm -rf /var/lib/apt/lists/* 

RUN 

# Install Node.js 18.x
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Install Maven 3.8 and OpenJDK 17
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk maven && \
    rm -rf /var/lib/apt/lists/*

# Install golang 1.22.2
RUN wget https://go.dev/dl/go1.22.2.linux-amd64.tar.gz && \
tar -C /usr/local -xzf go1.22.2.linux-amd64.tar.gz && \
rm go1.22.2.linux-amd64.tar.gz && \
echo "export PATH=$PATH:/usr/local/go/bin" >> /etc/profile


# Set Go environment variables
ENV PATH="/usr/local/go/bin:${PATH}"

RUN go env -w GOPROXY=direct

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json yarn.lock ./

# Install Yarn 1.22.x
RUN npm i -g yarn@1.22.x

RUN yarn install

# Copy the rest of the source code
COPY . .

# Build the app (if needed)
CMD ["yarn", "build"]
