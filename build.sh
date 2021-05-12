#!/bin/bash
echo "[INFO]Update via git"
git pull
echo "[INFO]Build project"
npm run build
