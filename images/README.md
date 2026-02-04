# Project Images

This folder contains images for the portfolio projects.

## Current Images

- `data-cleaning.jpg` - Image for Data Cleaning project
- `eda.jpg` - Image for Exploratory Data Analysis project
- `financial-forecasting.jpg` - Image for Financial Forecasting project (currently used in index.html)

## How to Add Your Own Images

1. Add your project images to this folder
2. Use standard image formats: `.jpg`, `.png`, `.webp`, `.svg`
3. Recommended image dimensions: 400x250 pixels (or maintain 16:10 aspect ratio)
4. Update the `src` attribute in index.html to point to your image:
   ```html
   <img src="images/your-image-name.jpg" alt="Project Description">
   ```

## Example Usage in HTML

```html
<!-- Using local image -->
<div class="project-image">
    <img src="images/your-project-image.jpg" alt="Your Project Name">
</div>

<!-- Using online placeholder (temporary) -->
<div class="project-image">
    <img src="https://via.placeholder.com/400x250/4A90E2/ffffff?text=Your+Project" alt="Your Project Name">
</div>
```

## Tips

- Optimize images before adding them (compress to reduce file size)
- Use descriptive filenames (e.g., `sales-dashboard.jpg` instead of `img1.jpg`)
- Always include meaningful alt text for accessibility
