---
layout: page
permalink: /service/
title: Service
description: 
nav: false
nav_order: 5
display_categories: [Teaching, Mentoring, Organization]
horizontal: false
---

<!-- pages/service.md -->
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h5 class="category">{{ category }}</h5>
  <ul>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  {%- for project in sorted_projects -%}
    <li>
      {% if project.redirect -%}
      <a href="{{ project.redirect }}">{{ project.title }}</a>
      {%- else -%}
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {%- endif %}
    </li>
  {%- endfor %}
  </ul>
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <ul>
  {%- for project in sorted_projects -%}
    <li>
      {% if project.redirect -%}
      <a href="{{ project.redirect }}">{{ project.title }}</a>
      {%- else -%}
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {%- endif %}
    </li>
  {%- endfor %}
  </ul>
{%- endif -%}
