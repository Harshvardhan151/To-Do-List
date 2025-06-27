# ✅ To-Do List Web App — Powered by Google Cloud Platform

Welcome to the **To-Do List Project**, a lightweight, modern, and responsive web application designed for managing your daily tasks. This app includes features like task creation, marking completion, deletion, a progress bar, dark mode toggle, and a feedback form with star ratings — all built using just **HTML**, **CSS**, and **JavaScript**.

But here's the twist: instead of using traditional web hosting or a complex backend server, this project is entirely **deployed on Google Cloud Platform (GCP)** using a stack of powerful cloud-native services. That means it runs with **zero backend servers**, **zero VMs**, and still provides blazing-fast access from anywhere in the world.

---

## 🌐 What's Inside the Project?

This is a **pure frontend web app**:
- `index.html`: the main interface of the app
- `style.css`: custom styles for both light and dark modes
- `script.js`: handles task logic, local storage, UI updates, and feedback

And it’s hosted with **cloud-grade performance and reliability**, thanks to GCP.

Link 
To-Do List : https://storage.googleapis.com/harsh-to-do-list/index.html

Portfolio : https://storage.googleapis.com/harshvardhan-portfolio-bucket/index.html

---

## 🚀 GCP Services Used (Explained in Detail)

### 1. **Cloud Storage**
Cloud Storage is the core service used to **store and serve** all the static assets (HTML, CSS, JS). We create a bucket (in this case, named something like `harsh-to-do-list`) and upload all our files there.

The bucket is configured for **public access**, allowing any user to retrieve these files via the web. This means Cloud Storage acts just like a web server — but managed and scaled by Google.

---

### 2. **IAM (Identity and Access Management)**
By default, Cloud Storage buckets are private. To make the website public, we modify its **IAM policies** to grant `Storage Object Viewer` permission to the identity `allUsers`. This step is critical — it ensures that anyone on the internet can access your website files.

IAM also helps you control **who can upload, update, or delete** content from the bucket, making it a secure yet flexible access model.

---

### 3. **HTTP(S) Load Balancer**
The GCP Load Balancer is configured to:
- Accept requests at a global IP address.
- Forward traffic to your **backend bucket** (the Cloud Storage bucket).
- Apply routing logic if needed (e.g., multiple paths for different pages or apps).

The load balancer allows you to use **a single entry point (an IP address or custom domain)** that automatically routes all traffic to the right files.

Think of it as the bridge that connects the internet to your bucket — efficiently and securely.

---

### 4. **Cloud CDN (Content Delivery Network)**
To make your app **lightning fast**, we enable Cloud CDN on the backend bucket. CDN caches your content at Google's edge locations across the world.

When someone visits your site, the static files (like `index.html`) are served from the nearest CDN node, not directly from your original bucket — drastically improving speed and reducing latency.

---

## 📊 How It All Comes Together

1. You upload your static website files to a GCP Cloud Storage bucket.
2. IAM policies are updated to make the files publicly accessible.
3. You configure an HTTP Load Balancer with that bucket as the backend.
4. Cloud CDN is enabled for fast global delivery.
5. The frontend is now available on a public IP address with enterprise-level performance.

No VMs. No backend. No database. No maintenance headaches. Just a clean static web app running on Google’s infrastructure.

---

## 🔐 Security & Cost

- **Security**: IAM ensures only the correct people can manage or view content.
- **Cost**: Since everything is serverless and static, your costs stay **extremely low** or **free** (within GCP’s free tier).
- **Scalability**: Your site can handle millions of requests with no changes.

---

## 🧠 Final Thoughts

This project is a great example of how modern cloud platforms like GCP can **simplify web deployment**. It teaches how to:
- Serve static content at scale
- Configure public access securely
- Use infrastructure tools like load balancers and CDN effectively

Whether you're a beginner learning cloud tech or an engineer building fast global sites, this approach delivers.

Welcome to the serverless future — and congrats on shipping your To-Do app the GCP way! 🌍☁️✅
