# RedirectTrace - URL Chain Inspector for Raycast

Professional URL redirect analysis tool for developers, SEO specialists, and security researchers.

## 🚀 Features

### Advanced Redirect Analysis
- **Complete chain visualization** - Follow every redirect with HTTP details
- **Status code indicators** - Color-coded 2xx/3xx/4xx/5xx responses  
- **Response headers** - Full HTTP header inspection
- **Timing information** - Request duration and timeout handling

### Smart URL Cleaning  
- **Tracking removal** - Strip 40+ tracking parameters automatically
- **Clean sharing** - Get URLs without marketing noise
- **Character savings** - See exactly what was removed
- **Malformed URL support** - Handle broken query strings

### Developer Workflow
- **Keyboard shortcuts** - Professional hotkey workflow
- **Export options** - Technical reports for documentation
- **Copy variations** - Clean URLs, headers, full chains
- **Smart clipboard** - Handle URLs too long for input field

## 📱 Usage

### Basic Tracing
1. Type any URL in the search field
2. View complete redirect chain instantly  
3. Copy clean URL or technical details

### Long URL Handling
1. Copy very long URL to clipboard
2. Use `Cmd + V` to detect and trace
3. Get full analysis without input limits

### Keyboard Shortcuts
- `Cmd + C` - Copy final URL
- `Cmd + O` - Open final URL
- `Cmd + Shift + L` - Copy clean URL
- `Cmd + Opt + C` - Copy technical report

## ⚙️ Configuration

Access in Raycast Settings > Extensions > RedirectTrace:

- **Max Redirects**: Maximum chain length (default: 10)
- **Timeout**: Request timeout in ms (default: 5000)

## 🎯 Use Cases

**Web Development**
- Debug redirect loops and chains
- Analyze link shortener behavior
- Test redirect implementations

**SEO Analysis**  
- Understand redirect impact on rankings
- Audit redirect chains for optimization
- Check competitor redirect strategies

**Security Research**
- Analyze suspicious URLs safely
- Trace tracking and analytics chains
- Investigate link manipulation

**Content Creation**
- Share clean links without tracking
- Document redirect behavior
- Create technical reports

## 🏗️ Technical Details

**Built with:**
- TypeScript + React
- Raycast API v1.48.0
- Native fetch API with manual redirect handling

**Architecture:**
- Debounced input processing
- Smart error handling and recovery  
- Configurable timeout and retry logic
- Professional status and progress indicators

## 👨‍💻 Author

**Nurkamol Vakhidov**  
Developer and Raycast enthusiast

🌐 [nurkamol.com](https://nurkamol.com)  
🐦 [@nurkamol](https://x.com/nurkamol)  
📧 [nurkamol@gmail.com](mailto:nurkamol@gmail.com)

## 📄 License

MIT License - See LICENSE file for details