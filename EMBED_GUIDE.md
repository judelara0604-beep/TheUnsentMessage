# How to Get Your Google Form EMBED Link

Your website now has an **embedded Google Form** that appears directly in the modal! Here's how to set it up:

## 🎯 Step-by-Step Instructions

### 1. Open Your Google Form
- Go to your form at [forms.google.com](https://forms.google.com)
- Make sure you're in **edit mode** (Questions tab)

### 2. Click "Share" (top-right corner)

### 3. Get the Embed Code
In the Share popup:
1. Click the **< > icon** (Embed HTML tab) - it's the third tab
2. You'll see HTML code that looks like:
   ```html
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform?embedded=true" ...>
   ```
3. **COPY ONLY THE URL** from inside the `src="..."` part

### 4. What to Copy
Copy everything between the quotes after `src=`:
```
https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform?embedded=true
```

**Important:** Make sure it ends with `?embedded=true` - this makes it work properly!

### 5. Paste into Your Website
1. Open `index.html` in a text editor
2. Find this line (around line 57):
   ```html
   src="YOUR_GOOGLE_FORM_EMBED_URL_HERE"
   ```
3. Replace `YOUR_GOOGLE_FORM_EMBED_URL_HERE` with your copied URL
4. Save the file

### 6. Upload to GitHub
- Upload the updated `index.html` file to your GitHub repository
- Or if already uploaded, edit it directly on GitHub

---

## 📋 Example

**What you copy from Google Forms:**
```
https://docs.google.com/forms/d/e/1FAIpQLSdXxXxXxXxXxXxXxXxXxXxXxXxX/viewform?embedded=true
```

**What it looks like in your HTML:**
```html
<iframe 
    src="https://docs.google.com/forms/d/e/1FAIpQLSdXxXxXxXxXxXxXxXxXxXxXxXxX/viewform?embedded=true" 
    class="google-form-iframe"
    frameborder="0">
</iframe>
```

---

## ✅ Test It!
After uploading, visit your website and click "Share a secret" - the form should appear right in the modal!

---

## 🎨 How It Looks Now

Before: Clicking button → Opens Google Forms in new tab  
**After: Clicking button → Form appears embedded in your beautiful dark modal!**

Much more seamless! 🚀
