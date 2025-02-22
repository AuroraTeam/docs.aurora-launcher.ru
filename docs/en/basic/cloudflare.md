# DNS Server Settings

## Setting up Cloudflare

Some of the filtering features of Cloudflare require specific configuration rules (Rules => Configuration Rules).
![1.png](/cloudflare/1.webp)

You only need to change the value of the full domain where you host the launchserver.\
Also `Place at` must be specified as `First`.

:::info Why is this necessary:
Unfortunately Cloudflare blocks any requests with User Agent containing the word Java and authlib-injector does not change the default User Agent.
:::

## SRV record for game server

For convenience, you can create a subdomain to access the servers. To do this, you need to create an SRV record (DNS => Records). \
Let's go through the record setup:

![2.png](/cloudflare/2.webp)

- `Name` - the subdomain form must be of the form `_minecraft._tcp.SUBDOMAIN`
- `Priority` - leave unchanged
- `Weight` - leave unchanged
- `TTL` - leave unchanged
- `Port` - we specify the port on which the server operates
- `Target` - IP of server or domain with A record

Save and in the game specify the connection address full domain **WITHOUT PORT**.