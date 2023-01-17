"use strict";

(function (core) {
  class Router {
    // Constructor
    constructor() {
      this.ActiveLink = "";
    }
    // Public Properties (getters and setters)

    get ActiveLink() {
      return this.m_activeLink;
    }
    set ActiveLink(link) {
      this.m_activeLink = link;
    }

    // Private methods
    // Public methods
    /**
     *Adding a new route to the Routhing Table
     *
     * @param {string} route
     * @returns {void}
     */
    Add(route) {
      this.m_routingTable.push(route);
    }
    /**
     *This replace the current Routhing Table with a new one
     *Routes should begin with  / character
     * @param {string} routingTable
     * @returns {void}
     */
    AddTable(routingTable) {
      this.m_routingTable = routingTable;
    }
    /**
     *This method find the index of the route in the routing table
     *
     * @param {string} route
     * @return {number} 
     */
    Find(route) {
      return this.m_routingTable.indexof(route);
    }
    /**
     *This method remove a route in the routing table
     *
     * @param {string} route
     * @return {boolean} 
     */
    Remove(route) {
      if (this.Find(route) > -1) {
        this.m_routingTable.splice(this.Find(route), 1);
        return true;
      }
      return false;
    }
    /**
     *This method return the routing table as a comma-separated string
     *
     * 
     * @return {string} 
     */
    ToString() {
      return this.m_routingTable.toString();
    }
  }
  core.Router = Router;
})(core || (core = {}));

let router = new core.Router();
router.AddTable([
  "/",
  "/home",
  "/about",
  "/contact",
  "/edit",
  "/projects",
  "/contact-list",
  "/login",
  "/register",
  "/services",
]);
