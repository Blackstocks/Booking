'use client'
import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import styles from '../style/FlightSearch.module.css';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [selectedFare, setSelectedFare] = useState('regular');

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img src="/makemytrip-logo.png" alt="Easy2trip" className={styles.logo} />
        <div className={styles.headerRight}>
          <div>List Your Property</div>
          <div>Introducing myBiz</div>
          <div>My Trips</div>
          <div>Hi Traveler</div>
          <div>IN | ENG</div>
          <div>INR</div>
        </div>
      </header>

      <main className={styles.mainCard}>
        {/* Navigation */}
        <nav className={styles.nav}>
          {[
            { id: 'flights', label: 'Flights', active: true },
            { id: 'hotels', label: 'Hotels' },
            { id: 'homestays', label: 'Homestays\n& Villas' },
            { id: 'holiday', label: 'Holiday\nPackages' },
            { id: 'trains', label: 'Trains' },
            { id: 'buses', label: 'Buses' },
            { id: 'cabs', label: 'Cabs' },
            { id: 'forex', label: 'Forex Card\n& Currency' },
            { id: 'insurance', label: 'Travel\nInsurance' }
          ].map((item) => (
            <div 
              key={item.id} 
              className={`${styles.navItem} ${item.active ? styles.active : ''}`}
            >
              <img 
                src={`/icons/${item.id}.svg`} 
                alt={item.label} 
                className={styles.navIcon} 
              />
              <span className={styles.navLabel}>{item.label}</span>
            </div>
          ))}
        </nav>

        <div className={styles.searchContainer}>
          {/* Trip Types */}
          <div className={styles.tripTypeContainer}>
            <div className={styles.tripTypes}>
              <label className={styles.tripType}>
                <input
                  type="radio"
                  checked={tripType === 'oneWay'}
                  onChange={() => setTripType('oneWay')}
                  name="tripType"
                />
                <span>One Way</span>
              </label>
              <label className={styles.tripType}>
                <input
                  type="radio"
                  checked={tripType === 'roundTrip'}
                  onChange={() => setTripType('roundTrip')}
                  name="tripType"
                />
                <span>Round Trip</span>
              </label>
              <label className={styles.tripType}>
                <input
                  type="radio"
                  checked={tripType === 'multiCity'}
                  onChange={() => setTripType('multiCity')}
                  name="tripType"
                />
                <span>Multi City</span>
              </label>
            </div>
            <span className={styles.bookingTypeText}>
              Book International and Domestic Flights
            </span>
          </div>

          {/* Search Form */}
          <div className={styles.searchForm}>
            <div className={styles.formField}>
              <div className={styles.fieldLabel}>From</div>
              <div className={styles.fieldValue}>Jaipur</div>
              <div className={styles.fieldSubtext}>JAI, Jaipur Airport India</div>
            </div>

            <div className={styles.formField}>
              <button className={styles.swapButton}>
                <ArrowLeftRight size={16} />
              </button>
              <div className={styles.fieldLabel}>To</div>
              <div className={styles.fieldValue}>Mumbai</div>
              <div className={styles.fieldSubtext}>BOM, Chhatrapati Shivaji Internation...</div>
            </div>

            <div className={styles.formField}>
              <div className={styles.fieldLabel}>Departure</div>
              <div className={styles.fieldValue}>21</div>
              <div className={styles.fieldSubtext}>Jan'25, Tuesday</div>
            </div>

            <div className={styles.formField}>
              <div className={styles.fieldLabel}>Return</div>
              <div className={styles.fieldSubtext}>
                Tap to add a return date for bigger discounts
              </div>
            </div>

            <div className={styles.formField}>
              <div className={styles.fieldLabel}>Travellers & Class</div>
              <div className={styles.fieldValue}>1</div>
              <div className={styles.fieldSubtext}>Economy/Premium Economy</div>
            </div>
          </div>

          {/* Fare Selection */}
          <div className={styles.fareSection}>
            <div className={styles.fareHeader}>
              <span>Select a special fare</span>
              <span className={styles.extraSavings}>EXTRA SAVINGS</span>
            </div>
            <div className={styles.fareGrid}>
              {[
                { id: 'regular', title: 'Regular', subtext: 'Regular fares' },
                { id: 'student', title: 'Student', subtext: 'Extra discounts/baggage' },
                { id: 'senior', title: 'Senior Citizen', subtext: 'Up to ₹ 600 off' },
                { id: 'armed', title: 'Armed Forces', subtext: 'Up to ₹ 600 off' },
                { id: 'medical', title: 'Doctor and Nurses', subtext: 'Up to ₹ 600 off' }
              ].map((fare) => (
                <div
                  key={fare.id}
                  className={`${styles.fareOption} ${selectedFare === fare.id ? styles.selected : ''}`}
                  onClick={() => setSelectedFare(fare.id)}
                >
                  <div className={styles.fareRadio}>
                    <input
                      type="radio"
                      checked={selectedFare === fare.id}
                      onChange={() => setSelectedFare(fare.id)}
                      name="fareType"
                    />
                    <span className={styles.fareTitle}>{fare.title}</span>
                  </div>
                  <div className={styles.fareSubtext}>{fare.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.searchButton}>SEARCH</button>
        </div>
      </main>

      {/* <div className={styles.bottomLinks}>
        <div>Where2Go</div>
        <div>
          How2Go
          <span className={styles.new}>new</span>
        </div>
        <div>MakeMyTrip ICICI Credit Card</div>
      </div> */}
    </div>
  );
};

export default FlightSearch;