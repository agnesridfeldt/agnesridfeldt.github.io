import React from "react";
import "./BusBookingConfirmation.css";

export default function BusBookingConfirmation2005() {
  const FROM_TOWN = "Pine Lake, MI";
  const TO_CITY = "Boston, MA";

  const DATE = "Friday, July 20, 2007";
  const DEPART = "06:30 AM";
  const ARRIVE = "05:45 PM";
  const DURATION = "11h 15m (estimated)";

  const CONFIRMATION = "BOS-7Q2K-1906";
  const PASSENGER = "Katie Miller";
  const CARRIER = "Northeast Coach Lines";
  const TRIP = "NCL 1842";

  const BOARDING = "Pine Lake Park & Ride (Bay 1)";
  const DROPOFF = "Boston South Station (Upper Busway)";

  const STATUS = "PAID";
  const TOTAL = "$79.00";
  const PAYMENT = "Credit Card (ending in •••• 1047)";

  return (
    <div className="bc-wrap">
      <div className="bc-card">
        <div className="bc-header">
          <div className="bc-brand">
            <span className="bc-logo" aria-hidden="true">
              NCL
            </span>
            <div>
              <div className="bc-title">{CARRIER}</div>
              <div className="bc-sub">Online Ticketing — Booking Confirmation</div>
            </div>
          </div>

          <div className="bc-status">
            <div className="bc-statusLine">
              <span className="bc-label">Status:</span> <strong>{STATUS}</strong>
            </div>
            <div className="bc-statusLine">
              <span className="bc-label">Confirmation #:</span>{" "}
              <span className="bc-code">{CONFIRMATION}</span>
            </div>
          </div>
        </div>

        <div className="bc-main">
          <h1 className="bc-h1">Your trip is booked.</h1>
          <p className="bc-note">
            Please arrive <strong>20 minutes</strong> early. Bring this page or your confirmation number.
          </p>

          <div className="bc-section">
            <div className="bc-sectionTitle">Trip</div>

            <div className="bc-grid">
              <div className="bc-row">
                <div className="bc-key">Route</div>
                <div className="bc-val">
                  <strong>{FROM_TOWN}</strong> → <strong>{TO_CITY}</strong>
                </div>
              </div>

              <div className="bc-row">
                <div className="bc-key">Date</div>
                <div className="bc-val">{DATE}</div>
              </div>

              <div className="bc-row">
                <div className="bc-key">Depart</div>
                <div className="bc-val">
                  <strong>{DEPART}</strong> (local time) • Trip <span className="bc-code">{TRIP}</span>
                </div>
              </div>

              <div className="bc-row">
                <div className="bc-key">Arrive (est.)</div>
                <div className="bc-val">
                  <strong>{ARRIVE}</strong> (local time)
                  <span className="bc-dim"> • Travel time: {DURATION}</span>
                </div>
              </div>

              <div className="bc-row">
                <div className="bc-key">Boarding</div>
                <div className="bc-val">{BOARDING}</div>
              </div>

              <div className="bc-row">
                <div className="bc-key">Drop-off</div>
                <div className="bc-val">{DROPOFF}</div>
              </div>
            </div>
          </div>

          <div className="bc-section">
            <div className="bc-sectionTitle">Passenger</div>

            <div className="bc-grid">
              <div className="bc-row">
                <div className="bc-key">Name</div>
                <div className="bc-val">{PASSENGER}</div>
              </div>

              <div className="bc-row">
                <div className="bc-key">Ticket</div>
                <div className="bc-val">One-way • Standard Fare • Open seating</div>
              </div>
            </div>
          </div>

          <div className="bc-section">
            <div className="bc-sectionTitle">Payment</div>

            <div className="bc-grid">
              <div className="bc-row">
                <div className="bc-key">Method</div>
                <div className="bc-val">{PAYMENT}</div>
              </div>

              <div className="bc-row">
                <div className="bc-key">Total</div>
                <div className="bc-val">
                  <strong>{TOTAL}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="bc-footnote">
            Need help? (617) 555-0184 • Reference <span className="bc-code">{CONFIRMATION}</span>
          </div>

          <div className="bc-footer">
            © 2005–2007 {CARRIER} • <a href="#" onClick={(e) => e.preventDefault()}>Terms</a> •{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}