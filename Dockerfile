# Base image
FROM php:7.4.0-apache-buster@sha256:fb896facfa8733e39d972159ee1a6eda36b1877c3a4b41c5b342ea160f34fb7b AS development

# Create Apache directory and copy the files
COPY --chown=www-data:www-data ./src/ /var/www/html/