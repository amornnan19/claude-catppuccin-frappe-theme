# Static landing page for catppuccin-frappe, served by nginx.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html scene.svg preview.png /usr/share/nginx/html/
EXPOSE 80
