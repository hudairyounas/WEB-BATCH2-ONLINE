import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/productService";
import ProductCard from "../components/products/ProductCard";
import {
  FaArrowRight,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaHeadset,
  FaStar,
  FaCopy,
  FaCheckCircle,
  FaEnvelope,
  FaTags,
} from "react-icons/fa";
import toast from "react-hot-toast";

const CATEGORIES = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    itemCount: "12 Items",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    itemCount: "8 Items",
  },
  {
    name: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&q=80",
    itemCount: "6 Items",
  },
  {
    name: "Home",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80",
    itemCount: "15 Items",
  },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const copyPromoCode = () => {
    navigator.clipboard.writeText("LUMINA20");
    toast.success('Promo code "LUMINA20" copied to clipboard!');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing! Check your inbox for 10% off.");
    setEmail("");
  };

  return (
    <div className="space-y-20 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-base-200 via-base-100 to-primary/10 border border-base-200 shadow-xs">
        <div className="container mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              New Summer Collection 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content leading-[1.15]">
              Elevate Your Everyday{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-indigo-600">
                Style & Living
              </span>
            </h1>

            <p className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover curated electronics, premium minimalist accessories, and
              handcrafted homeware designed for the modern connoisseur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                to="/shop"
                className="btn btn-primary rounded-full px-8 h-12 text-base shadow-md hover:shadow-lg transition-all gap-2"
              >
                Explore Shop <FaArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#categories"
                className="btn btn-outline rounded-full px-8 h-12 text-base"
              >
                View Categories
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-base-200/80 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-base-100 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                  alt="User"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-base-100 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                  alt="User"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-base-100 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                  alt="User"
                />
              </div>
              <div className="text-left text-xs">
                <div className="flex items-center text-amber-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="font-bold text-base-content ml-1">
                    4.9/5
                  </span>
                </div>
                <span className="text-gray-400">
                  Trusted by 2,500+ happy shoppers
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-base-200/60 bg-base-200">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80"
                  alt="Lumina Store Showcase"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-6 -left-6 bg-base-100/90 backdrop-blur-md border border-base-200 p-4 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                  <FaTruck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs">Fast 2-Day Shipping</div>
                  <div className="text-[10px] text-gray-400">
                    Free on orders over $50
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-base-100/90 backdrop-blur-md border border-base-200 p-4 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">
                  <FaTags className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-emerald-600">
                    Special Promo
                  </div>
                  <div className="text-[10px] text-gray-400">
                    Save up to 20% today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Explorer */}
      <section id="categories" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Browse Collections
            </span>
            <h2 className="text-3xl font-bold mt-1">Shop By Category</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-md">
            Find exactly what you're looking for across our carefully cataloged
            collections.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className="group relative rounded-3xl overflow-hidden aspect-4/5 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 border border-base-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col justify-end">
                <span className="text-[11px] font-medium text-white/70 uppercase tracking-wide">
                  {cat.itemCount}
                </span>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>

                <div className="mt-2 text-xs font-semibold text-white/90 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Collection <FaArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Featured Products Section */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Handpicked Selection
            </span>
            <h2 className="text-3xl font-bold mt-1">Featured Products</h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["All", "Electronics", "Accessories", "Furniture", "Home"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`btn btn-sm rounded-full px-4 text-xs font-medium transition-all ${
                    activeCategory === category
                      ? "btn-primary shadow-xs"
                      : "btn-ghost bg-base-200/60 hover:bg-base-200"
                  }`}
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-base-200/40 rounded-3xl border border-dashed border-base-300">
            <p className="text-gray-500">No products found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="btn btn-sm btn-ghost mt-2"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Special Offer Flash Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-12 shadow-xl">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-content text-xs font-semibold uppercase">
              ⚡ Limited Time Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Get 20% Off Your Entire First Purchase
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Use our exclusive promotional code at checkout to unlock instant
              savings across all product categories.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700 backdrop-blur-md">
            <div className="text-center sm:text-left">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                Promo Code
              </span>
              <span className="font-mono text-xl font-bold tracking-widest text-primary">
                LUMINA20
              </span>
            </div>
            <button
              onClick={copyPromoCode}
              className="btn btn-primary rounded-xl px-5 btn-sm gap-2 font-semibold"
            >
              <FaCopy className="w-3 h-3" /> Copy Code
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Our Commitment
          </span>
          <h2 className="text-3xl font-bold mt-1">
            Why Shop With LuminaStore?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-base-100 border border-base-200 shadow-xs hover:shadow-md transition-shadow space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto md:mx-0">
              <FaTruck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Free Express Delivery</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enjoy complimentary standard shipping on all qualifying orders
              over $50.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-base-100 border border-base-200 shadow-xs hover:shadow-md transition-shadow space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto md:mx-0">
              <FaShieldAlt className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">100% Secure Payment</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your financial transactions are encrypted with enterprise-grade
              security protocols.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-base-100 border border-base-200 shadow-xs hover:shadow-md transition-shadow space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto md:mx-0">
              <FaUndo className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">30-Day Easy Returns</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Not completely satisfied? Return any unused item within 30 days
              hassle-free.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-base-100 border border-base-200 shadow-xs hover:shadow-md transition-shadow space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto md:mx-0">
              <FaHeadset className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">24/7 Priority Support</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our dedicated customer care representatives are available around
              the clock.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="rounded-3xl bg-base-200/80 border border-base-300 p-8 md:p-14 text-center max-w-4xl mx-auto space-y-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
          <FaEnvelope className="w-5 h-5" />
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Stay In The Loop</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Subscribe to our newsletter for early access to product drops,
            secret sales, and 10% off your next order.
          </p>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered rounded-full flex-1 h-12 text-sm px-6"
            required
          />
          <button
            type="submit"
            className="btn btn-primary rounded-full px-8 h-12 text-sm font-semibold"
          >
            Subscribe
          </button>
        </form>

        <div className="flex items-center justify-center gap-6 text-xs text-gray-400 pt-2">
          <span className="flex items-center gap-1">
            <FaCheckCircle className="text-emerald-500" /> No spam ever
          </span>
          <span className="flex items-center gap-1">
            <FaCheckCircle className="text-emerald-500" /> Unsubscribe anytime
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
