# 📚 Modern Bookstore

A modern, full-stack bookstore application built with **Next.js 15**, **React 19**, **TypeScript**, **MongoDB**, and **Tailwind CSS**. This is a complete modernization of the original bookstore project.

## ✨ Features

- 🔥 **Latest Tech Stack**: Next.js 15 with App Router, React 19, TypeScript
- 💨 **Turbopack**: Fast development with Turbopack bundler
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- 🚀 **Performance**: Optimized with modern React patterns and Next.js features
- 📝 **Full CRUD**: Create, Read, Update, Delete books
- 🔍 **Type Safety**: Full TypeScript coverage for better development experience
- 🗄️ **MongoDB**: Modern database with Mongoose ODM
- 🎯 **API Routes**: RESTful API built with Next.js API routes

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB, Mongoose
- **Development**: ESLint, Turbopack
- **Deployment**: Vercel-ready

## 📋 Prerequisites

Before running this application, make sure you have:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - Choose one option:
   - **Local MongoDB**: [Download and install](https://www.mongodb.com/try/download/community)
   - **MongoDB Atlas** (Cloud): [Get free account](https://www.mongodb.com/atlas)
   - **Docker**: `docker run -d -p 27017:27017 --name mongodb mongo:latest`

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Navigate to the project
cd bookstore-modern

# Install dependencies
npm install

# Create MongoDB data directory (for local MongoDB)
npm run setup
```

### 2. Environment Configuration

The application uses MongoDB. The connection string is already configured for local MongoDB:

```env
MONGODB_URI=mongodb://localhost:27017/bookstore
```

If you're using **MongoDB Atlas** or a different connection, update `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string_here
```

### 3. Start MongoDB (Local Setup)

**Option A: Using MongoDB Service**
```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Linux
sudo systemctl start mongod

# On Windows
net start MongoDB
```

**Option B: Using npm script (if MongoDB is installed)**
```bash
npm run mongodb
```

**Option C: Using Docker**
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 4. Run the Application

```bash
# Start the development server
npm run dev
```

The application will be available at **http://localhost:3000**

## 📖 Usage Guide

### Adding Books
1. Click **"Add Book"** in the navigation
2. Fill in the book details:
   - **Title** and **Author** (required)
   - **Genre** (select from dropdown)
   - **Description**, **Publisher**, **Pages** (optional)
   - **Image URL** and **Buy URL** (optional)
3. Click **"Add Book"** to save

### Viewing Books
- The homepage displays all books in a beautiful grid layout
- Each book shows: cover image, title, author, genre, and description
- Click **"View Details"** to see full book information

### Editing Books
1. Click on a book to view its details
2. Click the **"Edit"** button
3. Modify the information
4. Click **"Save Changes"**

### Deleting Books
1. Go to a book's detail page
2. Click the **"Delete"** button
3. Confirm the deletion

## 🏗️ Project Structure

```
bookstore-modern/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── books/         # Book CRUD endpoints
│   ├── add-book/          # Add book page
│   ├── book/[id]/         # Dynamic book detail page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── lib/                   # Utility libraries
│   ├── models/            # MongoDB models
│   │   └── Book.ts        # Book model with TypeScript
│   └── mongodb.ts         # Database connection
├── public/                # Static files
├── .env.local            # Environment variables
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database (Local MongoDB)
npm run setup        # Create MongoDB data directory
npm run mongodb      # Start local MongoDB server
```

## 🚀 Production Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your MongoDB connection string as environment variable:
   - Go to Project Settings → Environment Variables
   - Add `MONGODB_URI` with your production MongoDB URL
4. Deploy!

### Environment Variables for Production

```env
MONGODB_URI=your_production_mongodb_uri
```

## 🔄 Migration from Old Version

This modern version replaces the old Express.js + jQuery setup with:

### What's Improved:
- ✅ **Next.js 15** instead of Express.js
- ✅ **React 19** instead of jQuery
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for modern styling
- ✅ **App Router** for better performance
- ✅ **API Routes** instead of separate backend
- ✅ **Modern MongoDB** connection handling
- ✅ **Responsive design** that works on all devices
- ✅ **Better error handling** and loading states

### API Endpoints:
- `GET /api/books` - Get all books
- `POST /api/books` - Create a new book
- `GET /api/books/[id]` - Get book by ID
- `PUT /api/books/[id]` - Update book by ID
- `DELETE /api/books/[id]` - Delete book by ID

## 🐛 Troubleshooting

### MongoDB Connection Issues
1. **Check if MongoDB is running**: `mongosh` or `mongo`
2. **Verify connection string** in `.env.local`
3. **Check MongoDB logs** for errors

### Development Issues
1. **Clear Next.js cache**: `rm -rf .next`
2. **Reinstall dependencies**: `rm -rf node_modules && npm install`
3. **Check port availability**: Make sure port 3000 is free

### Common Errors
- **"Cannot connect to MongoDB"**: Ensure MongoDB is running
- **"Port 3000 is busy"**: Use `npm run dev -- -p 3001` for different port
- **TypeScript errors**: Run `npm run lint` to check for issues

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Original bookstore project by Sudeepto Mukhopadhyay
- Next.js team for the amazing framework
- MongoDB team for the database
- Tailwind CSS for the styling system

---

**Happy coding! 🚀📚**
