# Notes

This section serves as a note to provide more details about class material.

## week 1

### Portfolio site examples

- https://hauyuan.myportfolio.com/
- https://yotammann.info/
- http://yiwenl.github.io/Sketches/
- https://kbv-wie-gehts.de/
- https://marioecg.com/
- https://clementgrellier.fr/
- https://insidethehead.co/
- https://kimalbrecht.com/vis/#all
- https://insidethehead.co/
- https://www.nikolastype.com/
- https://mark-appleby.com/


### Dyanmic image path in Vue

The imagePath is only rendered by Vue at runtime, Webpack has no chance of rewriting it. Use combination of ```require('~assets/' + src)``` instead. This allows Webpack to return the correct static path. ([ref](https://nuxtjs.org/docs/directory-structure/assets/#images)/[issues thread](https://github.com/vuejs-templates/webpack/issues/126#issuecomment-219571070))
```js
// 404 (x)
 <img :src="src" />
 
// Good (o)
 <img :src="require(`../assets/img/${src}`)"  />
```


### Binding Native Events to Components
There may be times when you want to listen directly to a native event on the root element of a component. In these cases, you can use the .native modifier for v-on: ([ref](https://v2.vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components))

```js
<Button @click.native="onClick"/>
```

## week 2

### Using Scss in Nuxt

[Nuxt](https://nuxtjs.org/docs/directory-structure/assets#sass) will automatically guess the file type by its extension and use the appropriate pre-processor loader for webpack. You will still need to install the required loader if you need to use them.

```bash
# npm
 npm install --save-dev sass sass-loader@10

# yarn
 yarn add --dev sass sass-loader@10
```

Once installed, you can use it by choosing from language.

```js
<style lang="scss" scoped>
  // Your styles here
</style>
```

### Design resources
- [Responsive grid layout demo](https://www.figma.com/file/endYBKn0VU9VQkzBQBiU50/WOU-grid-layout-demo)
- [Bootstrap grid overlay (chrome extension)](https://chrome.google.com/webstore/detail/bootstrap-grid-overlay/mnlklmelflkheijccafopdohgclfefcg?hl=en-US)

## week 3

### Event bus

In the latest NUXT, any component in a page can emit an event and any other component can listen to it by default. To emit an event,

```js
this.$nuxt.$emit("my-custom-event");
this.$nuxt.$emit("my-custom-event-with-value", 100); // We can pass the value
```

And to capture an event,

```js
mounted() {
   this.$nuxt.$on('my-custom-event', () => {
    // Your call back function
   })
   this.$nuxt.$on('my-custom-event-with-payload', (payload) => {
    // Do something with a payload
   })
},
// Make sure to clear the event listener before unmounting the component!
beforeDestroy(){ // -> beforeUnmount() for Vue 3
  this.$nuxt.$off('my-custom-event)
  this.$nuxt.$off('my-custom-event-with-payload)
}
```

:warning: Event bus is easy to use but it has a critical downside–it's hard to manage and keep track of when the project grows. I recommend using it in frugality only for your personal sites or experiments. For production-level app, it is a best practice to use the [vuex](https://vuex.vuejs.org/)/[store](https://nuxtjs.org/docs/directory-structure/store/) so that all components are consuming state from one source of truth.


### Githug pages
If you are creating GitHub Pages for one specific repository, and you don't have any custom domain, the URL of the page will be in this format: http://<username>.github.io/<repository-name>.

If you deployed dist folder without adding router base , when you visit the deployed site you will find that the site is not working due to missing assets. This is because we assume that the website root will be /, but in this case it is /<repository-name>.

To fix the issue we need to add router base configuration in nuxt.config.js:

```js
// nuxt.config.js
export default {
  target: 'static',
  generate: {
    dir: "docs", // default github page directory
  },
  router: {
    base: '/<repository-name>/'
  }
}
 ```
