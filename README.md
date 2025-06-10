# Stock Tracker

A modern stock tracking dashboard built with **Next.js**, **TypeScript**, and **Recharts** for data visualization. Monitor real-time stock prices, track historical performance, and analyze market trends.

---

## Features

- **Real-time stock data:** View current prices, daily changes, and percentage changes.
- **Interactive charts:** 30-day price history with hover tooltips using Recharts.
- **Responsive design:** Optimized for mobile, tablet, and desktop.
- **Type-safe codebase:** Built with TypeScript for reliability.
- **Efficient data fetching:** Powered by TanStack Query for caching and state management.
- **Modern UI:** Styled with Tailwind CSS for a sleek, customizable look.
- **Search functionality:** Lookup stocks by symbol.

---

## Technologies Used

- **Frontend:** Next.js 14 (App Router)
- **Types:** TypeScript
- **Styling:** Tailwind CSS
- **Data Fetching:** TanStack Query (React Query)
- **Data Visualization:** Recharts
- **API:** Alpha Vantage
- **UI Components:** React Icons

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- Alpha Vantage API key (free tier available)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/stock-tracker-dashboard.git
    cd stock-tracker-dashboard
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory:**
    ```env
    NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=your_api_key_here
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
stock-tracker/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app router
│   │   ├── page/         # Dashboard page
│   │   ├── providers.tsx # TanStack Query provider
│   │   └── layout.tsx    # Root layout
│   ├── components/       # Reusable components
│   │   ├── StockChart.tsx # Recharts-based stock chart
│   │   ├── StockCard.tsx # Stock information card
│   │   └── SearchBar.tsx # Stock search component
│   ├── hooks/            # Custom hooks
│   │   └── useStocks.ts  # Stock data fetching hooks
│   ├── types/            # TypeScript types
│   │   └── stock.ts      # Stock data interfaces
│   ├── utils/            # Utility functions
│   │   └── api.ts        # API client
│   └── styles/           # Global styles
├── .env            # Environment variables
├── package.json
└── README.md
```

---

## Configuration

### Environment Variables

Create a `.env` file with the following:

```env
# Alpha Vantage API Key
NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=your_api_key_here
```

### API Rate Limits

Alpha Vantage free tier limits:

- **5 API requests per minute**
- **500 requests per day**

Consider implementing caching or upgrading to a premium plan for higher usage.

---

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Create production build
- `npm start` — Start production server
- `npm run lint` — Run ESLint
- `npm run format` — Format code with Prettier

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
