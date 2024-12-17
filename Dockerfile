FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# # Copy from github repo
# RUN git clone https://github.com/bradly0cjw/Ticket_Order_System_BE.git \
#     && cp -r Ticket_Order_System_BE/* . \
#     && rm -rf Ticket_Order_System_BE

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "src/index.js"]