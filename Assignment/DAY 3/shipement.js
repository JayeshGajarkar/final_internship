class PackageItem {
    constructor(id, weight, destination) {
        this.id = id;
        this.weight = weight;
        this.destination = destination;
    }
}

class Shipment {
    constructor(id, courier) {
        this.id = id;
        this.packages = []; 
        this.status = "In Transit";
        this.courier = courier;
    }

    updateStatus(status) {
        this.status = status;
    }
}

class Courier {
    constructor(id, name, vehicle) {
        this.id = id;
        this.name = name;
        this.vehicle = vehicle;
        this.shipments = [];
    }

    assignShipment(shipment) {
        this.shipments.push(shipment);
    }
}

class ShippingCompany {
    constructor() {
        this.packages = [];
        this.shipments = [];
        this.couriers = [];
    }

    addPackage(id, weight, destination) {
        const newPackage = new PackageItem(id, weight, destination);
        this.packages.push(newPackage);
        console.log(`Package ${id} added.`);
    }

    registerCourier(id, name, vehicle) {
        const newCourier = new Courier(id, name, vehicle);
        this.couriers.push(newCourier);
        console.log(`Courier ${name} registered.`);
    }

    createShipment(id, courierId) {
        const courier = this.couriers.find(c => c.id === courierId);
        if (courier) {
            const newShipment = new Shipment(id, courier);
            this.shipments.push(newShipment);
            courier.assignShipment(newShipment);
            console.log(`Shipment ${id} created and assigned to courier ${courier.name}.`);
        } else {
            console.log(`Courier with ID ${courierId} not found.`);
        }
    }

    trackShipment(id) {
        const shipment = this.shipments.find(s => s.id === id);
        if (shipment) {
            console.log(`Shipment ${id} is currently ${shipment.status}.`);
        } else {
            console.log(`Shipment with ID ${id} not found.`);
        }
    }

    updateShipmentStatus(id, status) {
        const shipment = this.shipments.find(s => s.id === id);
        if (shipment) {
            shipment.updateStatus(status);
            console.log(`Shipment ${id} status updated to ${status}.`);
        } else {
            console.log(`Shipment with ID ${id} not found.`);
        }
    }

    viewAllPackages() {
        console.log("All Packages:");
        this.packages.forEach(pkg => {
            console.log(`ID: ${pkg.id}, Weight: ${pkg.weight}, Destination: ${pkg.destination}`);
        });
    }

    viewCourierInfo(id) {
        const courier = this.couriers.find(c => c.id === id);
        if (courier) {
            console.log(`Courier ID: ${courier.id}, Name: ${courier.name}, Vehicle: ${courier.vehicle}`);
            console.log("Shipments:");
            courier.shipments.forEach(shipment => {
                console.log(`Shipment ID: ${shipment.id}, Status: ${shipment.status}`);
            });
        } else {
            console.log(`Courier with ID ${id} not found.`);
        }
    }

    searchPackage(key) {
        const result=this.packages.filter(p =>(p.destination.includes(key)));
        result.forEach(p => console.log(`${p.id} | ${p.weight}  | ${p.destination} | `));
    }

}

const company = new ShippingCompany();
company.addPackage(1, 10, "Mumbai");
company.registerCourier(1, "Jayesh Gajarkar", "Van");
company.createShipment(1, 1);
company.trackShipment(1);
company.updateShipmentStatus(1, "Delivered");
company.viewAllPackages();
company.viewCourierInfo(1);
company.searchPackage("Mumbai");