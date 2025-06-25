# RedirectTrace - URL Chain Inspector for Raycast

A powerful URL redirect tracer for Raycast that helps you see where links really lead before clicking them. Like wheregoes.com for Raycast.

<a title="Install redirect-trace Raycast Extension" href="https://www.raycast.com/nurkamol/redirect-trace"><img src="https://www.raycast.com/nurkamol/redirect-trace/install_button@2x.png?v=1.1" height="64" style="height: 64px;" alt=""></a>

## Screenshot

![RedirectTrace Extension Screenshot](https://github.com/nurkamol/redirect-trace/blob/main/metadata/redirect-trace-1.png)
![RedirectTrace Extension Screenshot](https://github.com/nurkamol/redirect-trace/blob/main/metadata/redirect-trace-2.png)
![RedirectTrace Extension Screenshot](https://github.com/nurkamol/redirect-trace/blob/main/metadata/redirect-trace-3.png)
![RedirectTrace Extension Screenshot](https://github.com/nurkamol/redirect-trace/blob/main/metadata/redirect-trace-4.png)
![RedirectTrace Extension Screenshot](https://github.com/nurkamol/redirect-trace/blob/main/metadata/redirect-trace-5.png)

## Features

- 🔍 **Smart URL Detection** - Automatically detects long URLs in your clipboard
- 🔗 **Complete Redirect Chain** - Shows every step of URL redirections
- 🧹 **Clean URLs** - Removes tracking parameters and reveals clean URLs
- 📋 **Smart Clipboard Integration** - Detects and offers to trace URLs from clipboard
- ⚡ **Fast & Efficient** - Real-time URL tracing with minimal latency
- 🎯 **Detailed Analysis** - HTTP status codes, headers, and redirect types
- 📊 **Visual Status Indicators** - Color-coded status for each redirect step
- ⌨️ **Keyboard Shortcuts** - Full keyboard navigation and quick actions

## How to Use

### Method 1: Search Bar
1. Open the extension in Raycast
2. Type or paste any URL in the search bar
3. Press Enter to trace the redirect chain
4. View the complete path from original to final destination

### Method 2: Clipboard Detection
1. Copy any long URL to your clipboard
2. Open the extension
3. If a long URL is detected, you'll see a clipboard section
4. Click "Trace This URL" to analyze the redirect chain

### Method 3: Keyboard Shortcuts
- **⌘V** - Check clipboard for URLs
- **⌘C** - Copy final URL
- **⌘O** - Open final URL in browser
- **⌘⇧C** - Copy original URL
- **⌘⌥C** - Copy full chain report

## What You'll See

### Summary Section
- **Original URL** - The URL you entered with character count
- **Final Destination** - Where the URL actually leads
- **Clean URL** - Final URL with tracking parameters removed
- **Redirect Count** - Number of redirects in the chain

### Redirect Chain
Each step shows:
- **HTTP Status Code** - 301, 302, 307, etc.
- **Status Message** - Moved Permanently, Found, etc.
- **URL at Each Step** - Complete redirect path
- **Headers** - Response headers for each redirect
- **Step Number** - Position in the redirect chain

### Supported URLs
- **Shortened URLs** - bit.ly, tinyurl.com, t.co, etc.
- **Marketing Links** - Email campaign URLs
- **Tracking URLs** - URLs with UTM parameters
- **Social Media** - Facebook, Twitter redirect URLs
- **Any HTTP/HTTPS URL** - Direct analysis of any web link
## Install from source:
```bash
git clone https://github.com/nurkamol/redirect-trace.git
cd redirect-trace
npm install && npm run build
```

## Privacy & Security

- **No Data Storage** - URLs are not stored or logged
- **Direct Requests** - All requests go directly to target servers
- **No Analytics** - No tracking or data collection
- **Local Processing** - All analysis happens on your device

## Use Cases

### 🔐 Security
- **Phishing Detection** - See where suspicious links really lead
- **Malware Prevention** - Check URLs before clicking
- **Link Verification** - Verify legitimate vs malicious redirects

### 📈 Marketing
- **Campaign Analysis** - Understand redirect paths in campaigns
- **Link Optimization** - Find unnecessary redirects slowing down links
- **UTM Parameter Inspection** - See what tracking data is being collected

### 🛠️ Development
- **API Testing** - Test redirect behavior in applications
- **SEO Analysis** - Check for redirect chains affecting SEO
- **Performance Debugging** - Identify slow or broken redirects

## Keyboard Shortcuts Reference

| Shortcut | Action |
|----------|--------|
| **⌘V** | Check clipboard for URLs |
| **⌘C** | Copy final/clean URL |
| **⌘O** | Open URL in browser |
| **⌘⇧C** | Copy original URL |
| **⌘⌥C** | Copy full chain report |
| **⌘⇧L** | Copy clean URL (no tracking) |
| **⌘I** | Show full URL in toast |
| **⌘L** | Show clean URL in toast |
| **⌘X** | Clear clipboard detection |

## Technical Details

- **Built with** - TypeScript, React, Raycast API
- **HTTP Client** - Native fetch with proper header handling
- **URL Parsing** - RFC 3986 compliant URL parsing
- **Redirect Handling** - Supports all HTTP redirect status codes
- **Error Handling** - Graceful handling of network errors and timeouts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use and modify as needed.

## Support

If you encounter any issues or have feature requests, please open an issue on GitHub.

## 👨‍💻 Author

**Nurkamol Vakhidov**  
Developer and Raycast enthusiast

🌐 [nurkamol.com](https://nurkamol.com)  
🐦 [@nurkamol](https://x.com/nurkamol)  
📧 [nurkamol@gmail.com](mailto:nurkamol@gmail.com)

## Inspiration

This extension was inspired by the web service [WhereGoes.com](https://wheregoes.com) - a simple and effective tool for tracing URL redirects. We wanted to bring that same functionality directly into Raycast for faster, more convenient URL analysis without leaving your workflow.

---

Made with ❤️ for the Raycast community
