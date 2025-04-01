export class Item {
    constructor(
      public name: string,
      public sellIn: number,
      public quality: number
    ) {}
  }
  
export  class GildedRose {
    items: Item[];
  
    constructor(items: Item[]) {
      this.items = items;
    }
  
    updateQuality() {
      for (let item of this.items) {
        if (item.name !== "Sulfuras, Hand of Ragnaros") {
          item.sellIn--;
        }
  
        if (item.name === "Aged Brie") {
          this.updateAgedBrie(item);
        } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
          this.updateBackstagePass(item);
        } else if (item.name === "Sulfuras, Hand of Ragnaros") {
          continue;
        } else if (item.name.startsWith("Conjured")) {
          this.updateConjured(item);
        } else {
          this.updateNormalItem(item);
        }
  
        if (item.quality > 50) {
          item.quality = 50;
        }
        if (item.quality < 0) {
          item.quality = 0;
        }
      }
    }
  
    updateAgedBrie(item: Item) {
      if (item.sellIn < 0) {
        item.quality += 2;
      } else {
        item.quality++;
      }
    }
  
    updateBackstagePass(item: Item) {
      if (item.sellIn < 0) {
        item.quality = 0;
      } else if (item.sellIn <= 5) {
        item.quality += 3;
      } else if (item.sellIn <= 10) {
        item.quality += 2;
      } else {
        item.quality++;
      }
    }
  
    updateNormalItem(item: Item) {
      if (item.sellIn < 0) {
        item.quality -= 2;
      } else {
        item.quality--;
      }
    }
  
    updateConjured(item: Item) {
      if (item.sellIn < 0) {
        item.quality -= 4;
      } else {
        item.quality -= 2;
      }
    }
  }
  