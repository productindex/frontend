
// Checks to see if the website is actually from Facebook, Instagram, Twitter or LinkedIn
export const socialMediaLinkValidation = (website, socialMediaType ) => {
    website = website.toUpperCase().replace('HTTPS://', '').replace('HTTP://', '').replace('WWW.', '').toLowerCase()
    if (socialMediaType == 'FB' && website.startsWith('facebook')) {
      return true
    }
    if (socialMediaType == 'IG' && website.startsWith('instagram')) {
      return true
    }
    if (socialMediaType == 'TW' && website.startsWith('twitter')) {
      return true
    }
    if (socialMediaType == 'LI' && website.startsWith('linkedin')) {
      return true
    }
    
    return false
}