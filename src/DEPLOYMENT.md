# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Project Settings → Environment Variables

### Automatic Deployments
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments automatically

---

## Deploy to Netlify

1. **Install Netlify CLI** (optional)
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

---

## Deploy to Digital Ocean

### Using App Platform:

1. **Create Account** on [Digital Ocean](https://digitalocean.com)

2. **Create App**
   - Choose "Apps" from sidebar
   - Click "Create App"
   - Connect GitHub repository

3. **Configure**
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: `3000`

4. **Deploy**
   - Click "Deploy"

---

## Deploy to Custom Server (VPS)

### Requirements:
- Node.js 18+ installed
- PM2 for process management
- Nginx as reverse proxy

### Steps:

1. **Clone Repository**
   ```bash
   git clone your-repo-url
   cd upskill-dxb
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build**
   ```bash
   npm run build
   ```

4. **Install PM2**
   ```bash
   npm install -g pm2
   ```

5. **Start with PM2**
   ```bash
   pm2 start npm --name "upskill-dxb" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Environment Variables

Create `.env.local` file for local development:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

For production, add environment variables through your hosting platform's dashboard.

---

## Performance Checklist

✅ Images optimized (using Next.js Image component)
✅ Code splitting (automatic with Next.js)
✅ CSS minification (automatic in production build)
✅ Static page generation where possible
✅ Fonts optimized
✅ Analytics configured (add Google Analytics if needed)

---

## Post-Deployment

1. **Test the deployment**
   - Check all pages load correctly
   - Test form submissions
   - Verify responsive design on mobile
   - Check console for errors

2. **Monitor Performance**
   - Use [Lighthouse](https://developers.google.com/web/tools/lighthouse)
   - Monitor Core Web Vitals
   - Set up error tracking (Sentry, etc.)

3. **Set up Analytics**
   - Google Analytics
   - Vercel Analytics (if using Vercel)

4. **Configure Custom Domain**
   - Add DNS records
   - Enable HTTPS
   - Set up redirects if needed
