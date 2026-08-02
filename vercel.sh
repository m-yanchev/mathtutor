#!/bin/sh
set -e

if [ "$RUN_DB_MIGRATION" = "1" ]; then
  echo "Running migration build"
  npm run build:migration
else
  echo "Running normal build"
  npm run build:production
fi