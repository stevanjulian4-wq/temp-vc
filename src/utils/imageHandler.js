const fs = require('fs');
const path = require('path');
const { AttachmentBuilder } = require('discord.js');

// Function to get the interface image
function getInterfaceImage() {
  const imagePath = path.join(__dirname, '../assets/NewInterface.webp');
  
  // Check if the image exists
  if (fs.existsSync(imagePath)) {
    const attachment = new AttachmentBuilder(imagePath, { name: 'NewInterface.webp' });
    attachment.name = 'newInterface.webp';
    return attachment;
  }
  
  // Try alternative image formats if webp doesn't exist
  const pngPath = path.join(__dirname, '../assets/interface.png');
  if (fs.existsSync(pngPath)) {
    const attachment = new AttachmentBuilder(pngPath, { name: 'NewInterface.png' });
    attachment.name = 'newinterface.png';
    return attachment;
  }
  
  const jpgPath = path.join(__dirname, '../assets/interface.jpg');
  if (fs.existsSync(jpgPath)) {
    const attachment = new AttachmentBuilder(jpgPath, { name: 'Newinterface.jpg' });
    attachment.name = 'newinterface.jpg';
    return attachment;
  }
  
  return null;
}

module.exports = { getInterfaceImage }; 
