import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FreeSection } from "../../components/contest/FreeSection/FreeSection";
import { PremiumSection } from "../../components/contest/PremiumSection/PremiumSection";

export function Contest() {
  return (
    <div className="mx-auto p-2">
    <Tabs defaultValue="free" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="free">Free</TabsTrigger>
        <TabsTrigger value="premium">Premium</TabsTrigger>
      </TabsList>

      {/* Free Section */}
      <TabsContent value="free">
        <FreeSection />
      </TabsContent>

      {/* Premium Section */}
      <TabsContent value="premium">
        <PremiumSection />
      </TabsContent>
    </Tabs>
    </div>
  );
}
