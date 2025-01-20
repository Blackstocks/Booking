'use client'

import React, { useState } from 'react';
import styles from '../style/FlightSearch.module.css';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('oneWay');

  const navigationItems = [
    { icon: "✈️", label: "Flights", active: true },
    { icon: "🏨", label: "Hotels" },
    { icon: "🏠", label: "Homestays & Villas" },
    { icon: "🎁", label: "Holiday Packages" },
    { icon: "🚆", label: "Trains" },
    { icon: "🚌", label: "Buses" },
    { icon: "🚕", label: "Cabs" },
    { icon: "💳", label: "Forex Card & Currency" },
    { icon: "🛡️", label: "Travel Insurance" }
  ];

  const fareTypes = [
    { id: 'regular', label: 'Regular', subtext: 'Regular fares', active: true },
    { id: 'student', label: 'Student', subtext: 'Extra discounts/baggage' },
    { id: 'senior', label: 'Senior Citizen', subtext: 'Up to ₹ 600 off' },
    { id: 'armed', label: 'Armed Forces', subtext: 'Up to ₹ 600 off' },
    { id: 'medical', label: 'Doctor and Nurses', subtext: 'Up to ₹ 600 off' }
  ];

  return (
    <div className={styles.container}>
      {/* Navigation Tabs */}
      <div className={styles.navTabs}>
        {navigationItems.map((item, index) => (
          <div key={index} className={`${styles.navItem} ${item.active ? styles.active : ''}`}>
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navLabel}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Trip Type Selection */}
      <div className={styles.tripTypes}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="tripType"
            value="oneWay"
            checked={tripType === 'oneWay'}
            onChange={(e) => setTripType(e.target.value)}
          />
          <span>One Way</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="tripType"
            value="roundTrip"
            checked={tripType === 'roundTrip'}
            onChange={(e) => setTripType(e.target.value)}
          />
          <span>Round Trip</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="tripType"
            value="multiCity"
            checked={tripType === 'multiCity'}
            onChange={(e) => setTripType(e.target.value)}
          />
          <span>Multi City</span>
        </label>
      </div>

      {/* Flight Search Form */}
      <div className={styles.searchForm}>
        {/* From */}
        <div className={styles.formField}>
          <label className={styles.fieldLabel}>From</label>
          <div className={styles.fieldValue}>Jaipur</div>
          <div className={styles.fieldSubtext}>JAI, Jaipur Airport India</div>
        </div>

        {/* Swap Icon */}
        <div className={styles.swapIcon}>
          ⇄
        </div>

        {/* To */}
        <div className={styles.formField}>
          <label className={styles.fieldLabel}>To</label>
          <div className={styles.fieldValue}>Mumbai</div>
          <div className={styles.fieldSubtext}>BOM, Chhatrapati Shivaji International</div>
        </div>

        {/* Departure */}
        <div className={styles.formField}>
          <label className={styles.fieldLabel}>Departure</label>
          <div className={styles.fieldValue}>21</div>
          <div className={styles.fieldSubtext}>Jan'25, Tuesday</div>
        </div>

        {/* Travelers & Class */}
        <div className={styles.formField}>
          <label className={styles.fieldLabel}>Travellers & Class</label>
          <div className={styles.fieldValue}>1 Traveller</div>
          <div className={styles.fieldSubtext}>Economy/Premium Economy</div>
        </div>
      </div>

      {/* Fare Types */}
      <div className={styles.fareTypes}>
        <div className={styles.fareHeader}>
          <span className={styles.savingsTag}>EXTRA SAVINGS</span>
          <span>Select a special fare</span>
        </div>
        <div className={styles.fareOptions}>
          {fareTypes.map((fare) => (
            <label key={fare.id} className={`${styles.fareOption} ${fare.active ? styles.active : ''}`}>
              <input
                type="radio"
                name="fareType"
                value={fare.id}
                checked={fare.active}
              />
              <div className={styles.fareText}>
                <div className={styles.fareLabel}>{fare.label}</div>
                <div className={styles.fareSubtext}>{fare.subtext}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Search Button */}
      <div className={styles.searchButton}>
        <button>SEARCH</button>
      </div>
    </div>
  );
};

export default FlightSearch;