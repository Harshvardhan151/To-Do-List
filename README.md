# ✅ To-Do List Web App on Google Cloud Platform

This is a fully functional **To-Do List** web application designed using **HTML, CSS, and JavaScript**, and deployed entirely on **Google Cloud Platform (GCP)**. It includes key features like a dark mode toggle, task completion tracker, and a feedback section with star ratings and suggestions — all wrapped in a responsive, minimalist UI.

This project was built as part of a Cloud Computing assignment, with a focus on using **multiple core services of GCP** for real-world deployment.

---

## 🔥 Key Features

- Add, delete, and complete tasks with one click
- Local storage support to preserve tasks
- Dynamic progress bar showing % completed
- Toggle between dark and light modes
- Feedback section with star rating + comment
- Responsive layout for desktop and mobile

---

## ☁️ Google Cloud Services Used

### 1. Cloud Storage

Google Cloud Storage acts as the **web hosting layer** of this project. The static frontend files — `index.html`, `style.css`, and `script.js` — are all uploaded into a public GCS bucket.

By configuring the bucket as a static website, users can access it using a browser like a regular website. Permissions were updated using `gsutil` to allow **`allUsers:objectViewer`**, enabling public access.

---

### 2. Cloud CDN

To optimize delivery speed and reduce latency, **Cloud CDN** (Content Delivery Network) was enabled on the backend bucket. This caches static content like HTML, CSS, and JS files at edge locations around the world, ensuring faster access for users regardless of region.

The CDN also reduces load on the backend storage and helps the app scale without performance dips.

---

### 3. Load Balancer (HTTP)

Google Cloud Load Balancing was used to expose the Cloud Storage content via an external, globally accessible IP address. An HTTP Load Balancer was created with:

- A frontend that listens on port 80 (HTTP)
- A backend bucket connected to our GCS bucket
- Host and path rules to route traffic
- CDN support enabled on the backend bucket

This setup gives us a **global HTTP endpoint** (e.g., `http://34.xx.xx.xx`) that users can hit directly.

---

### 4. IAM (Identity and Access Management)

IAM was used to **grant public read permissions** on the Cloud Storage bucket. This allows users to view the hosted static content without authentication. It also ensures only authorized GCP users can manage or modify the backend.

Roles like `Storage Object Viewer` were applied using:

```bash
gsutil iam ch allUsers:objectViewer gs://your-bucket-name
