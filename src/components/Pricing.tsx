
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Target, Check, X } from "lucide-react";

const Pricing = () => {
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
      return <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />;
    } else if (value === "partial") {
      return <span className="text-yellow-500 text-xs sm:text-sm">Partial</span>;
    } else {
      return <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Pricing Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-yellow-500/15 border border-yellow-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <Target className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
            <span className="text-yellow-500 font-bold text-sm sm:text-base">🎯 One-Time Payment — Lifetime Access for Only $47</span>
          </div>
          
          <p className="text-base sm:text-xl text-gray-200 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            💬 With Copyfy, you only pay once and get unlimited access forever. No hidden fees, no subscriptions. 
            Ideal for Google Ads and COD campaigns in over 30 countries — fully translated.
          </p>
          
          {/* Highlight Box */}
          <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="text-yellow-500 font-bold text-lg sm:text-xl mb-2">
              [LIFETIME DEAL]
            </div>
            <div className="text-white text-xl sm:text-2xl font-bold">
              Get full access for just <span className="text-yellow-500">$47</span> — pay once, use forever.
            </div>
          </div>
          
          <Button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl shadow-yellow-500/30 transition-all duration-300 hover:scale-105">
            Get Lifetime Access for $47
          </Button>
        </div>

        {/* Comparison Table */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-yellow-500/20 overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-yellow-500/20">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 text-center">
              📊 Platform Comparison
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-yellow-500/20 hover:bg-transparent">
                  <TableHead className="text-yellow-500 font-bold text-sm sm:text-base">Platform</TableHead>
                  <TableHead className="text-yellow-500 font-bold text-sm sm:text-base">Main Focus</TableHead>
                  <TableHead className="text-yellow-500 font-bold text-sm sm:text-base">Price</TableHead>
                  <TableHead className="text-yellow-500 font-bold text-sm sm:text-base">Auto Translation</TableHead>
                  <TableHead className="text-yellow-500 font-bold text-sm sm:text-base">COD Copywriting</TableHead>
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
                    <TableCell className={`font-bold text-sm sm:text-base ${
                      row.isHighlighted ? 'text-yellow-500' : 'text-gray-200'
                    }`}>
                      {row.isHighlighted && '⭐ '}{row.platform}
                    </TableCell>
                    <TableCell className="text-gray-300 text-sm sm:text-base">{row.focus}</TableCell>
                    <TableCell className={`font-bold text-sm sm:text-base ${
                      row.isHighlighted ? 'text-yellow-500' : 'text-gray-200'
                    }`}>
                      {row.price}
                    </TableCell>
                    <TableCell className="text-center">
                      {renderCheckmark(row.autoTranslation)}
                    </TableCell>
                    <TableCell className="text-center">
                      {renderCheckmark(row.codCopywriting)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
