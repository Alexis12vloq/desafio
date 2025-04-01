import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';  
import { Item } from '../app/gilded-rose'; 

describe('GildedRose', () => {
  it('debería aumentar la calidad de Aged Brie con el tiempo', () => {
    const items = [new Item('Aged Brie', 2, 0)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1); 
  });

  it('debería disminuir la calidad de los artículos normales con el tiempo', () => {
    const items = [new Item('Normal Item', 5, 10)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9); 
  });
});
