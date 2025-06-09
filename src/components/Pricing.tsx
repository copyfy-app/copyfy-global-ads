import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Target, Check, X } from "lucide-react";

const Pricing = () => {
  const handleBuyNow = () => {
    window.open('https://www.hotmart.com', '_blank');
  };

  const comparisonData = [
    {
      platform: "Copyfy",
      focus: "Google Ads + Global COD",
      price: "$47 (One-time)",
      autoTranslation: true,
      codCopywriting: true,
      isHighlighted: true
    },
    {
      platform: "AdCreative.ai",
      focus: "Visual creatives",
      price: "$99/month",
      autoTranslation: false,
      codCopywriting: false,
      isHighlighted: false
    },
    {
      platform: "Copymonkey.ai",
      focus: "Amazon listings",
      price: "$49/month",
      autoTranslation: false,
      codCopywriting: false,
      isHighlighted: false
    },
    {
      platform: "Anyword",
      focus: "Generic AI copywriting",
      price: "$79/month",
      autoTranslation: "partial",
      codCopywriting: "partial",
      isHighlighted: false
    }
  ];

  const renderCheckmark = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-4 w-4 text-green-500 mx-auto" />;
    } else if (value === "partial") {
      return <span className="text-yellow-500 text-xs font-medium">Partial</span>;
    } else {
      return <X className="h-4 w-4 text-red-500 mx-auto" />;
    }
  };

  return (
    <section className="py-8 md:py-16 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Pricing Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-yellow-500/15 border border-yellow-500/30 rounded-full px-3 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
            <Target className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
            <span className="text-yellow-500 font-bold text-xs md:text-base">🎯 One-Time Payment — Lifetime Access for Only $47</span>
          </div>
          
          <p className="text-sm md:text-xl text-gray-200 max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
            💬 With Copyfy, you only pay once and get unlimited access forever. No hidden fees, no subscriptions. 
            Ideal for Google Ads and COD campaigns in over 30 countries — fully translated.
          </p>
          
          {/* Highlight Box */}
          <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-xl md:rounded-2xl p-4 md:p-8 mb-6 md:mb-8 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
            <div className="text-yellow-500 font-bold text-sm md:text-xl mb-2">
              [LIFETIME DEAL]
            </div>
            <div className="text-white text-base md:text-2xl font-bold">
              Get full access for just <span className="text-yellow-500">$47</span> — pay once, use forever.
            </div>
          </div>
          
          <Button 
            onClick={handleBuyNow}
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-sm md:text-lg px-4 md:px-8 py-3 md:py-4 rounded-full shadow-xl shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
          >
            Get Lifetime Access for $47
          </Button>
        </div>

        {/* Comparison Table */}
        <div className="bg-black/60 backdrop-blur-sm rounded-xl md:rounded-3xl border border-yellow-500/20 overflow-hidden w-full">
          <div className="p-4 md:p-6 border-b border-yellow-500/20">
            <h3 className="text-lg md:text-2xl font-bold text-yellow-500 text-center">
              📊 Platform Comparison
            </h3>
          </div>
          
          {/* Mobile-optimized table container with horizontal scroll */}
          <div className="overflow-x-auto w-full">
            <div className="min-w-[600px] w-full">
              <Table>
                <TableHeader>
                  <TableRow className="border-yellow-500/20 hover:bg-transparent">
                    <TableHead className="text-yellow-500 font-bold text-xs md:text-base px-2 md:px-4 min-w-[100px]">Platform</TableHead>
                    <TableHead className="text-yellow-500 font-bold text-xs md:text-base px-2 md:px-4 min-w-[120px]">Main Focus</TableHead>
                    <TableHead className="text-yellow-500 font-bold text-xs md:text-base px-2 md:px-4 min-w-[100px]">Price</TableHead>
                    <TableHead className="text-yellow-500 font-bold text-xs md:text-base px-2 md:px-4 text-center min-w-[120px]">Auto Translation</TableHead>
                    <TableHead className="text-yellow-500 font-bold text-xs md:text-base px-2 md:px-4 text-center min-w-[120px]">COD Copywriting</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow 
                      key={index} 
                      className={`border-yellow-500/20 ${
                        row.isHighlighted 
                          ? 'bg-yellow-500/10 hover:bg-yellow-500/15' 
                          : 'hover:bg-black/40'
                      }`}
                    >
                      <TableCell className={`font-bold text-xs md:text-base px-2 md:px-4 ${
                        row.isHighlighted ? 'text-yellow-500' : 'text-gray-200'
                      }`}>
                        {row.isHighlighted && '⭐ '}{row.platform}
                      </TableCell>
                      <TableCell className="text-gray-300 text-xs md:text-base px-2 md:px-4">{row.focus}</TableCell>
                      <TableCell className={`font-bold text-xs md:text-base px-2 md:px-4 ${
                        row.isHighlighted ? 'text-yellow-500' : 'text-gray-200'
                      }`}>
                        {row.price}
                      </TableCell>
                      <TableCell className="text-center px-2 md:px-4">
                        {renderCheckmark(row.autoTranslation)}
                      </TableCell>
                      <TableCell className="text-center px-2 md:px-4">
                        {renderCheckmark(row.codCopywriting)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
