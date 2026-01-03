# API Specification – Nigeria EMTL FinTech Application

## Overview
This document defines the API and system design for the Nigeria EMTL (Electronic Money Transfer Levy)
FinTech application. The system calculates EMTL charges, records transactions, and integrates with
payment gateways.

---

## System Architecture
- Client: Mobile App / Web App
- Backend: REST API
- Database: Transaction and user records
- External Services: Payment Gateway, Government EMTL service

---

## Authentication
- Method: API Key or JWT Token
- All requests must be authenticated

---

## API Endpoints

### 1. Calculate EMTL Levy
**Endpoint**
