# Junubin Logistics - Custom React Platform

A professional, high-performance logistics website built with React, Vite, and Tailwind CSS, tailored for the Eastern & Central African market.

## 🚀 Key Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Service Deep Linking**: Footer links navigate directly to specific services on the Home page.
- **Premium Hero Section**: Dynamic image slider with custom branding.
- **Embedded Forms**: Integrated "Get a Quote" and "Contact Us" forms.
- **Floating WhatsApp Integration**: Fixed point chat button for immediate client engagement.

---

## 📧 Email Service Configuration (EmailJS)

This project uses **EmailJS** to handle form submissions without a backend server. To manage your quote requests and contact messages, ensure your EmailJS account is configured as follows:

### 1. Credentials
The following IDs are required in `QuoteDialog.tsx` and `Contact.tsx`:
- **Service ID**: The ID of your connected email service (e.g., Gmail).
- **Template ID**: The ID of your specific email template.
- **Public Key**: Found in your EmailJS Account settings.

### 2. Required Template Variables
When creating your Email Template in the EmailJS dashboard, use the following tags in the **Body** or **Subject** so that data from the website is captured:

| Variable | Description |
| :--- | :--- |
| `{{from_name}}` | The full name of the potential client. |
| `{{reply_to}}` | The client's email address (for easy replies). |
| `{{phone}}` | The client's phone number. |
| `{{service}}` | The specific logistics service requested (Quotes only). |
| `{{subject}}` | The subject of the message (Contact form only). |
| `{{message}}` | The detailed inquiry or shipment info. |

---

## 🛠️ Development & Deployment

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

### Production Build
To prepare the site for hosting:
1. Run the build command:
   ```bash
   npm run build
   ```
2. The optimized files will be generated in the `dist/` folder.

### Deployment (Hosting)
1. **Clean public_html**: Remove old files (like WordPress) from your host's `public_html` directory.
2. **Upload**: Move the **contents** of the `dist/` folder into `public_html`.
3. **SPA Routing**: Ensure the `.htaccess` file (included in `dist/`) is uploaded to handle internal React routing properly.

---

## 🎨 Design System
- **Primary Red**: `bg-accent-red` / `text-accent-red`
- **Dark Backgrounds**: `bg-black` / `bg-secondary`
- **Typography**: Optimized font hierarchy using standard system-ui and sans-serif stacks.

---
*Developed by Junubin Logistics Technical Team.*
