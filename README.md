# Sveltfolio

A portfolio of professional aspects of me, but also a testing ground for certain things, namely:

- [SvelteKit 2](https://svelte.dev/blog/sveltekit-2)
- WebGL
- [Prismic](https://prismic.io) CMS
- scaled hosting <!-- CloudFlare??? -->

<!--
- maybe... WASM
-->

## Multipass notes

>*If you develop natively (bad dobby! why should you?) you can skip these.*

### Port forward `localhost`s (if using Multipass)

There are two localhosts: the one within your VM and the one within your host. 

For clarity, it's great to let these meet, so that e.g. Command-clicking a `http://localhost:8788` link takes you there.

You need:

- Your VM IP (`multipass info web`)
- The ports the web framework uses (Cloudflare/SvelteKit: `5173`, `8788`.

```
sudo sh -c 'ssh -o ControlPersist=yes -fNT -i /var/root/Library/Application\ Support/multipassd/ssh-keys/id_rsa -L 8788:localhost:8788 ubuntu@192.168.64.92'
```

## Usage

tbd.

<!-- hidden
## References

- [Announcing SvelteKit 2](https://svelte.dev/blog/sveltekit-2) (blog, Dec'23)
-->
