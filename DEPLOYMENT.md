# Deployment Guide for AL-NAQLA Website

This guide explains how to deploy the AL-NAQLA website to a live server. You can use platforms like GitHub Pages, Netlify, or any other hosting service.

---

## 1️⃣ Deploying to GitHub Pages

### Steps:
1. **Push the Code to GitHub**:
   - Ensure all your files are committed and pushed to the `main` branch of your GitHub repository.

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to `Settings` → `Pages`.
   - Under "Source," select the `main` branch.
   - Save the settings.

3. **Access Your Website**:
   - Your website will be available at `https://<username>.github.io/<repository-name>`.

---

## 2️⃣ Deploying to Netlify

### Steps:
1. **Login to Netlify**:
   - Go to [Netlify](https://www.netlify.com/) and log in or sign up.

2. **Drag and Drop**:
   - Drag the entire project folder into the Netlify dashboard.

3. **Automatic Deployment**:
   - Netlify will automatically deploy your site and provide you with a live URL.

4. **Custom Domain (Optional)**:
   - You can set up a custom domain in the Netlify settings.

---

## 3️⃣ Deploying to Other Hosting Services

### Using FTP:
1. **Prepare Your Files**:
   - Ensure all files are in the root directory.

2. **Connect to Your Server**:
   - Use an FTP client like FileZilla to connect to your hosting server.

3. **Upload Files**:
   - Upload all files to the `public_html` or equivalent directory.

4. **Test Your Website**:
   - Open your domain in a browser to verify the deployment.

---

## 🌐 Important Notes

- Ensure the `index.html` file is in the root directory.
- Test your website locally before deploying.
- Optimize images and videos for faster loading.
- Use HTTPS for secure connections.

---

**Happy Deploying! 🚀**