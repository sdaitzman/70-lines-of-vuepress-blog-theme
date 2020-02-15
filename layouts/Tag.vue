<template>
  <ul id="default-layout">
    <span>{{$frontmatter.title}}</span>
    <h1>This sure is a page!! :D</h1>
    <li v-for="tag in $tag.list">
      <router-link class="page-link" :to="tag.path">{{ tag.name }}</router-link>
    </li>
  </ul>
</template>
