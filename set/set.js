function Set () {
    let items = {};

    this.has = (value) => {
        return items.hasOwnProperty(value);
    };
    this.add = (value) => {
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };
    this.remove = (value) => {
      if(this.has(value)){
          delete items[value];
          return true;
      }
      return false;
    };
    this.clear = () => {
        items = {};
    };
    this.size = () => {
      return Object.keys(items).length;
    };
    this.value = () => {
      return Object.keys(items);
    };
    //并集
    this.union = (otherSet) => {
        let unionSet = new Set();
        let values = this.values;
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    //交集
    this.intersection = (otherSet) => {
        let intersectionSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };
    //差集
    this.difference = (otherSet) => {
        let differenceSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
    //判断是否是otherSet的子集
    this.subset = (otherSet) => {
        if(this.size() > otherSet.size()){
            return false;
        }else{
            let values = this.values();
            for(let i = 0; i < values.length; i++){
                if(!otherSet.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    };
}